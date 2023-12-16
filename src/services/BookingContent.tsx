import axios from 'axios';
import { SERVER_IP, SERVER_PORT } from '@env';

export async function getBookingData(selected_date: string) {
    if (selected_date === null) {
      alert('Invalid date');
      return;
    }
    try {
      const response = await axios.get('http://' + String(SERVER_IP) + ':' + String(SERVER_PORT) + '/getBookingConfiguration', {
        params: {
          selected_date: selected_date,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }