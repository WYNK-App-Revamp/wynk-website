import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function CaptainProgress(props) {
  const {progress} = props;
  return (
    <Box sx={{ width: '100%', backgroundColor: '#241CB7' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}