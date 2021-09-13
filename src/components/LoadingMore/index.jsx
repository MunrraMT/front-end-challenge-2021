import { Box, Button } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';

const LoadingMore = () => (
  <Box
    component="section"
    display="flex"
    justifyContent="center"
    marginTop="2rem"
  >
    <Button
      size="small"
      variant="outlined"
      color="default"
      startIcon={<ReplayIcon />}
    >
      Loading more
    </Button>
  </Box>
);

export default LoadingMore;
