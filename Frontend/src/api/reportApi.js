 const API_URL = 'https://korai-health-task-backend.onrender.com/api/v1/upload';

export const uploadReport = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    throw new Error('Failed to upload report');
  }

  return await response.json(); // returns { data: [...] }
};
