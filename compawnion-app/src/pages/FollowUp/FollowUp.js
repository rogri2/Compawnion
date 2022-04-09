import React from 'react'
import { Container, Typography } from '@mui/material'

import FollowUpCard from '../../components/FollowUpCard'

export default function FollowUp() {
  return (
    <Container>
      <Typography textAlign={"center"} variant="h3">Follow Up</Typography>
      <Typography textAlign={"center"} color='textSecondary' variant='body2'>Aquí se muestran las historas de las mascotas después de haber sido adoptadas.</Typography>

      <FollowUpCard />
      <FollowUpCard />
      <FollowUpCard />
      <FollowUpCard />

    </Container>
  )
}
