import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#2d3353',
    marginBottom: '1em',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
});

const Events = ({ data: { allGoogleSheetEventsRow: { nodes } } }) => {
  const classes = useStyles();
  return (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">
            <div className="inner">
                <header className="major">
                    <h1>Events</h1>
                    {
                      nodes.map(({ meetuplink, month, place, title, videolink, year, descriptionhtml, day }) => {
                        return (
                          <Card className={classes.root} variant="outlined">
                            <CardContent>
                              <h3>{title}</h3>
                              <p> {day} {month} {year}</p>
                              <p> {place}</p>
                              <a href={videolink}> Voir la video</a>
                            </CardContent>
                          </Card>
                        );
                      })
                    }
                </header>
            </div>
        </div>

    </Layout>
  )
}

export default Events;

export const pageQuery = graphql`
  query MyQuery {
    allGoogleSheetEventsRow {
      nodes {
        meetuplink
        month
        place
        title
        videolink
        year
        descriptionhtml
        day
      }
    }
  }
`;
