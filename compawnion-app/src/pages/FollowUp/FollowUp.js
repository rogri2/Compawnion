import React from 'react'
import { Box, Container, Typography } from '@mui/material'

import FollowUpCard from '../../components/FollowUpCard'

export default function FollowUp() {
  return (
    <Container>
      <Box sx={{m:3}}>
        <Typography textAlign={"center"} variant="h3">Follow Up</Typography>
        <Typography textAlign={"center"} color='textSecondary' variant='body2'>Aquí se muestran las historas de las mascotas después de haber sido adoptadas.</Typography>
      </Box>

      <FollowUpCard />
      <FollowUpCard />
      <FollowUpCard />
      <FollowUpCard />

    </Container>
  )
}
