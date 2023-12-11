import axios from 'axios';

export async function getBookingData(selected_date: string) {
    if (selected_date === null) {
      alert('Invalid date');
      return;
    }
    try {
      const response = await axios.get('http://192.168.1.76:9132/getBookingConfiguration', {
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