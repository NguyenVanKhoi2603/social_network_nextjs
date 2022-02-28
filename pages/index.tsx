import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Pages } from '@mui/icons-material';
import { Container, Grid, Paper } from '@mui/material';
import ItemPost from '../components/Post/ItemPost';
import UserCardSmall from '../components/User/UserCardSmall'
import MiniSearch from '../components/MiniSearch';

const Home: NextPage = () => {
  return (

    <Grid container spacing={3} className="content-main">
      <Grid item xs={0} md={3} className="on-web">
        <div className="box1"></div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="box2">
          <ItemPost />
          <ItemPost />
        </div>
      </Grid>
      <Grid item xs={0} md={3}>
        <div className="box3">
          <MiniSearch />
          <Paper className="paper-user-small">
            <UserCardSmall />
            <UserCardSmall />
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
}

export default Home
