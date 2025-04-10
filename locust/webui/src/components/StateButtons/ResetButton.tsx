import { Button } from '@mui/material';

export default function ResetButton() {
  const onResetStatsClick = () => {
    fetch((window.baseUrl ? `${window.baseUrl}/` : '') + 'stats/reset');
  };

  return (
    <Button color='warning' onClick={onResetStatsClick} type='button' variant='contained'>
      Reset
    </Button>
  );
}
