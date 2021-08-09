import React, { useState } from 'react';
import type { GetServerSideProps } from 'next';
import { Container, Layout, List, Row, Col, Button, Schedule } from 'components';
import { API_EVENTS, API_TIMEZONES } from '_constants';
import { formatTime } from 'formatters';
import axios from 'axios';

interface MainState {
  timezone: string | null;
  selected: {
    start?: string | null;
    end?: string | null;
    summary?: string | null;
  } 
}

interface MainProps {
  timezones: any
  events: any
}

export default function Main({ timezones, events }:  MainProps) {
  const [state, setState] = useState<MainState>({
    timezone: null,
    selected: {
      start: null,
      end: null,
      summary: null,
    }
  });
  
  const handleTimezoneChange = (item: any) => {
    setState((state) => ({
      ...state, 
      timezone: state.timezone !== item ? item : null 
    }))
  }

  const handleEventsChange = (item: any) => {

    setState((state) => ({
      ...state, 
      selected: {
        ...item
      },
    }))
  }

  const itemRendererTimezones = (item: string) => {
    return (<li key={item}>
      <Button 
        selected={state.timezone === item} 
        onClick={() => handleTimezoneChange(item)}
      >
        {item}
      </Button>
    </li>)
  }

  const itemRendererEvents = (item: any) => {
    return (<li key={item.start+item.end}>
      <Button 
        selected={state.selected.summary === item.summary} 
        onClick={() => handleEventsChange(item)}
      >
        {item.summary}
      </Button>
    </li>)
  }
 
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <List 
              renderer={itemRendererTimezones} 
              data={timezones}
            />
          </Col>
          <Col>
            <List 
              renderer={itemRendererEvents} 
              data={events}
            />
          </Col>
        </Row>
      </Container>
      <Container>
          <Row>
            <Col>
              <Schedule 
                data={[state.selected]} 
                timezone={state.timezone} 
              />
            </Col>
          </Row>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [eventsResponse, timezonesResponse] = await Promise.all(
    [
      axios(API_EVENTS), 
      axios(API_TIMEZONES)
    ]);
 
  return {
    props: {
      events: eventsResponse.data.events, 
      timezones: timezonesResponse.data.timezones,
    }
  }
}
