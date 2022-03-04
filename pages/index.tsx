import type { NextPage } from 'next'
import { Container, Grid, Paper } from '@mui/material';
import ItemPost from '../components/Post/ItemPost';
import UserCardSmall from '../components/User/UserCardSmall'
import MiniSearch from '../components/MiniSearch';
import { PostClientAPI, UserClientAPI } from '../lib/client';
import { useEffect, useState } from 'react';
import { IPost } from '../types/post';
import _ from 'lodash';
import { IUser } from '../types/user';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [users, setUsers] = useState<IUser[]>([])

  const getAllPosts = async () => {
    try {
      let res = await PostClientAPI.posts().get({ page: 1, limit: 5 })
      if (!_.isEmpty(res.data)) {
        setPosts(res.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getAllUsers = async () => {
    try {
      let res = await UserClientAPI.users().get({ page: 1, limit: 10 })
      if (!_.isEmpty(res.data)) {
        setUsers(res.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllPosts()
    getAllUsers()
  }, [])

  return (

    <Grid container spacing={3} className="content-main">
      <Grid item xs={0} md={3} className="on-web">
        <div className="box1"></div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="box2">
          {
            _.map(posts, (post, index) => (
              <ItemPost key={index} post={post} />
            ))
          }
        </div>
      </Grid>
      <Grid item xs={0} md={3} className="wrapper-box3">
        <div className="box3">
          <MiniSearch />
          <Paper className="paper-user-small">
            {
              _.map(users, (user, index) => (
                <UserCardSmall key={index} user={user} />
              ))
            }
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
}

export default Home
