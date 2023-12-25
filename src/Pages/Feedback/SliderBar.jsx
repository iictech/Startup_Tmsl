import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '1',
  },
  {
    value: 20,
    label: '2',
  },
  {
    value: 30,
    label: '3',
  },
  {
    value: 40,
    label: '4',
  },
  {
    value: 50,
    label: '5',
  },
  {
    value: 60,
    label: '6',
  },
  {
    value: 70,
    label: '7',
  },
  {
    value: 80,
    label: '8',
  },
  {
    value: 90,
    label: '9',
  },
  {
    value: 100,
    label: '10',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const SliderBar = () => {
  return (
    <Box sx={{ width: '60%', maxWidth : '300',  mx : '25' }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{
          color: '#f0685f',  // Use MUI's color palette, e.g., primary, secondary, etc.
          '& .MuiSlider-track': {
            backgroundColor: '#f0685f', // Adjust track color if necessary
          },
          '& .MuiSlider-thumb': {
            backgroundColor: '#f0685f', // Adjust thumb color if necessary
          },
          marginTop: '1rem',
        }}
      />
    </Box>
  );
}

export default SliderBar;