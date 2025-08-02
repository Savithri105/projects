import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  IconButton, 
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box
} from "@mui/material";
import { Edit, Delete, CheckCircle, Cancel, Menu } from "@mui/icons-material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [username, setUsername] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(taskSchema),
  });

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get("http://localhost:3001/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  const onSubmit = (data) => {
    if (editId) {
      axios.put(`http://localhost:3001/tasks/${editId}`, data).then(() => {
        fetchTasks();
        setEditId(null);
        reset();
      });
    } else {
      const newTask = { ...data, completed: false };
      axios.post("http://localhost:3001/tasks", newTask).then(() => {
        fetchTasks();
        reset();
      });
    }
  };

  const handleEdit = (task) => {
    if (!task.completed) {
      setEditId(task.id);
      setValue("title", task.title);
      setValue("description", task.description);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/tasks/${id}`).then(() => fetchTasks());
  };

  const handleToggleComplete = (task) => {
    axios.put(`http://localhost:3001/tasks/${task.id}`, {
      ...task,
      completed: !task.completed,
    }).then(() => fetchTasks());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-blue-900 text-white h-full p-4">
      <h2 className="text-xl font-bold mb-6">Task Manager</h2>
      <p className="text-sm mb-6">👤 {username}</p>
      <Divider className="bg-blue-700" />
      <nav>
        <List>
          <ListItem button component="a" href="/daily-routine">
            <ListItemText primary="Daily Routine" className="hover:underline" />
          </ListItem>
        </List>
      </nav>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Sidebar */}
      <Box
        component="aside"
        sx={{ width: 240, flexShrink: 0, display: { xs: 'none', sm: 'block' } }}
      >
        {drawer}
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ 
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          bgcolor: 'background.default'
        }}
      >
        {/* Mobile Header */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, mb: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div">
            Task Manager
          </Typography>
        </Box>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">Your Tasks</h1>
          <span className="text-blue-600 font-medium">Welcome, {username}</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mb-8">
          <TextField 
            label="Title" 
            fullWidth 
            {...register("title")} 
            error={!!errors.title} 
            helperText={errors.title?.message} 
            size="small"
          />
          <TextField 
            label="Description" 
            fullWidth 
            {...register("description")} 
            size="small"
            multiline
            rows={3}
          />
          <Button 
            variant="contained" 
            type="submit" 
            color="primary"
            size="large"
          >
            {editId ? "Update Task" : "Add Task"}
          </Button>
        </form>

        {/* Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <Card 
              key={task.id} 
              sx={{ 
                boxShadow: 3,
                backgroundColor: task.completed ? 'action.hover' : 'background.paper'
              }}
            >
              <CardContent>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 'bold',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'text.secondary' : 'text.primary'
                  }}
                >
                  {task.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ mb: 2, color: 'text.secondary' }}
                >
                  {task.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    {!task.completed && (
                      <IconButton 
                        color="primary" 
                        onClick={() => handleEdit(task)}
                        size="small"
                      >
                        <Edit fontSize="small" />
                      </IconButton>
                    )}
                    <IconButton 
                      color="error" 
                      onClick={() => handleDelete(task.id)}
                      size="small"
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                  <IconButton 
                    onClick={() => handleToggleComplete(task)}
                    size="small"
                  >
                    {task.completed ? (
                      <Cancel color="disabled" fontSize="small" />
                    ) : (
                      <CheckCircle color="success" fontSize="small" />
                    )}
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default TaskPage;