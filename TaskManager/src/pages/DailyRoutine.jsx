import React, { useEffect, useState } from "react";
import axios from "axios";
import {TextField,Button,Card, CardContent,IconButton,Typography,InputLabel,FormControl,Select,MenuItem,Grid,Box,ToggleButton,ToggleButtonGroup} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const DailyRoutine = () => {
  const [routines, setRoutines] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    startTime: "",
    endTime: "",
    startPeriod: "AM",
    endPeriod: "PM",
  });
  const [filter, setFilter] = useState("All");

 const fetchRoutines = () => {
  axios.get("http://localhost:3001/routines").then((res) => {
    const sorted = res.data.sort(
      (a, b) =>
        convertTo24Hour(a.startTime, a.startPeriod) -
        convertTo24Hour(b.startTime, b.startPeriod)
    );
    setRoutines(sorted);
  });
};

useEffect(() => {
  fetchRoutines();
}, []);

const convertTo24Hour = (time, period) => {
  if (!time) return 0;

  let [hour, minute] = time.split(":").map(Number);

  if (!period) {
    return hour * 60 + minute;
  }
  if (hour > 12 && period.toUpperCase() === "PM") {
    return hour * 60 + minute; 
  }
  if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
        return hour * 60 + minute;
};

const filteredRoutines = routines.filter((r) => {
  const mins = convertTo24Hour(r.startTime, r.startPeriod) ;
  if (filter==="All") return true;
  if (filter === "Morning") return mins >= 0 && mins < 12 * 60; 
  if (filter === "Evening") return mins >= 12 * 60 && mins < 24 * 60; 
});


 const handleSubmit = (e) => {
  e.preventDefault();
  const data = { ...formData };

  const isEditing = editId !== null && editId !== undefined;

  if (isEditing) {
    
    axios.put(`http://localhost:3001/routines/${editId}`, data)
      .then(() => {
        fetchRoutines();
        resetForm();
      })
      .catch((error) => {
        console.error("Error updating routine:", error);
        alert("Failed to update routine. Please try again.");
      });
  } else {
   
    axios.post("http://localhost:3001/routines", data)
      .then(() => {
        fetchRoutines();
        resetForm();
      })
      .catch((error) => {
        console.error("Error adding routine:", error);
        alert("Failed to add routine. Please try again.");
      });
  }
};

const resetForm = () => {
  setEditId(null);
  setFormData({
    title: "",
    startTime: "",
    endTime: "",
    startPeriod: "AM",
    endPeriod: "AM"
  });
};

const handleEdit = (r) => {
  setEditId(r.id);
  setFormData({
    title: r.title,
    startTime: r.startTime,
    endTime: r.endTime,
    startPeriod: r.startPeriod,
    endPeriod: r.endPeriod,
  });
};

const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/routines/${id}`)
    .then(() => fetchRoutines())
    .catch((error) => {
      console.error("Error deleting routine:", error);
      alert("Failed to delete routine. Please try again.");
    });
};


  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, bgcolor: 'grey.50', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 3, color: 'primary.dark', fontWeight: 'bold' }}>
        🕒 Daily Routine
      </Typography>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 2,
          mb: 4
        }}
      >
        <TextField
          label="Routine Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          fullWidth
        />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Start Time"
            type="time"
            value={formData.startTime}
            onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth>
            <InputLabel>AM/PM</InputLabel>
            <Select
              value={formData.startPeriod}
              onChange={(e) => setFormData({ ...formData, startPeriod: e.target.value })}
              required
              label="AM/PM"
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="End Time"
            type="time"
            value={formData.endTime}
            onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth>
            <InputLabel>AM/PM</InputLabel>
            <Select
              value={formData.endPeriod}
              onChange={(e) => setFormData({ ...formData, endPeriod: e.target.value })}
              required
              label="AM/PM"
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          sx={{ 
            gridColumn: { xs: '1', sm: '1 / -1', md: 'auto' },
            height: '56px'
          }}
        >
          {editId ? "Update" : "Add"} Routine
        </Button>
      </Box>

     
      <Box sx={{ mb: 4 }}>
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(e, newFilter) => setFilter(newFilter)}
          aria-label="routine filter"
          sx={{ flexWrap: 'wrap', gap: 1 }}
        >
          <ToggleButton value="All" aria-label="all routines">
            All
          </ToggleButton>
          <ToggleButton value="Morning" aria-label="morning routines">
            Morning
          </ToggleButton>
          <ToggleButton value="Evening" aria-label="evening routines">
            Evening
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

   
      <Grid container spacing={2}>
        {filteredRoutines.map((r) => (
          <Grid item xs={12} sm={6} key={r.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                  {r.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {r.startTime} {r.startPeriod} - {r.endTime} {r.endPeriod}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                  <IconButton 
                    color="primary" 
                    onClick={() => handleEdit(r)}
                    aria-label="edit"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton 
                    color="error" 
                    onClick={() => handleDelete(r.id)}
                    aria-label="delete"
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DailyRoutine;
