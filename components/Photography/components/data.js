// components/data.js

export const popularPhotographers = [
    { id: '1', name: 'John Doe', image: 'https://img.freepik.com/premium-photo/world-photography-day-green-photographer-with-camera_1203138-30366.jpg', rating: 4.8, location: 'New York' },
    { id: '2', name: 'Jane Smith', image: 'https://img.freepik.com/premium-photo/man-with-camera-giving-thumbs-up_939033-53697.jpg', rating: 4.6, location: 'Los Angeles' },
    { id: '3', name: 'Alex Brown', image: 'https://img.freepik.com/premium-photo/young-photographer-is-taking-pictures-forest-he-is-wearing-blue-jacket-brown-bag-he-is-looking-through-camera-lens_14117-234440.jpg', rating: 4.9, location: 'San Francisco' },
    { id: '4', name: 'Rathika', image: 'https://webneel.com/daily/sites/default/files/images/daily/10-2018/12-famous-indian-photographer-rathika-ramasamy.jpg', rating: 4.9, location: 'San Francisco' },
  ];
  
  export const photographerProfiles = [
    // { 
    //   id: '1', 
    //   name: 'John Doe', 
    //   image: 'https://img.freepik.com/premium-photo/world-photography-day-green-photographer-with-camera_1203138-30366.jpg', 
    //   location: 'New York', 
    //   specialty: 'Wedding Photography', 
    //   price: '$200/hr', 
    //   rating: 4.8,
    //   bio: 'Experienced wedding photographer with 10+ years in the industry.',
    // },
    {
      id: '1',
      name: 'John Doe',
      location: 'New York',
      specialty: 'Wedding Photography',
      price: '$200/hr',
      rating: 4.8,
      bio: 'Experienced wedding photographer with 10+ years in the industry.',
       image: 'https://img.freepik.com/premium-photo/world-photography-day-green-photographer-with-camera_1203138-30366.jpg', 
    previousPhotos: [
        'https://images.squarespace-cdn.com/content/v1/5528192ae4b04359ebf93b9c/1684680137293-YETRM0MBVEDMY19B009Y/2023-05-10_0002.jpg',
        'https://www.candidshutters.com/maintenance/wp-content/uploads/2022/10/wedding-videography-in-nashik_3.jpg',
        'https://s3.fabweddings.in/storage/aniket-bhor-photography-in-pune/cardimage/912083-2020-04-05-04-05-02.jpg',
        'https://www.ramanava.com/uploads/4/0/6/6/40663425/2015-11-08c009-w_orig.jpg',
      ],
      feedback: [
        { user: 'Alice', comment: 'Amazing work! The photos came out beautiful.' },
        { user: 'Bob', comment: 'Highly professional and talented photographer.' },
        { user: 'Bob', comment: 'Highly professional and talented photographer.' },
      ],
    },
    { 
      id: '2', 
      name: 'Jane Smith', 
      image: 'https://img.freepik.com/premium-photo/man-with-camera-giving-thumbs-up_939033-53697.jpg', 
      location: 'Los Angeles', 
      specialty: 'Portrait Photography', 
      price: '$150/hr', 
      rating: 4.6,
      bio: 'Creative portrait photographer with a focus on natural light.',
    },
    { 
      id: '3', 
      name: 'Jane Smith', 
      image: 'https://img.freepik.com/premium-photo/young-photographer-is-taking-pictures-forest-he-is-wearing-blue-jacket-brown-bag-he-is-looking-through-camera-lens_14117-234440.jpg', 
      location: 'Los Angeles', 
      specialty: 'Portrait Photography', 
      price: '$150/hr', 
      rating: 4.6,
      bio: 'Creative portrait photographer with a focus on natural light.',
    },
    {
      id: '4',
      name: 'Rathika',
      location: 'India',
      specialty: 'Wedding Photography',
      price: '$200/hr',
      rating: 4.8,
      bio: 'Experienced wedding photographer with 10+ years in the industry.',
       image: 'https://webneel.com/daily/sites/default/files/images/daily/10-2018/12-famous-indian-photographer-rathika-ramasamy.jpg', 
    previousPhotos: [
        'https://images.squarespace-cdn.com/content/v1/5528192ae4b04359ebf93b9c/1684680137293-YETRM0MBVEDMY19B009Y/2023-05-10_0002.jpg',
        'https://www.candidshutters.com/maintenance/wp-content/uploads/2022/10/wedding-videography-in-nashik_3.jpg',
        'https://s3.fabweddings.in/storage/aniket-bhor-photography-in-pune/cardimage/912083-2020-04-05-04-05-02.jpg',
        'https://www.ramanava.com/uploads/4/0/6/6/40663425/2015-11-08c009-w_orig.jpg',
      ],
      feedback: [
        { user: 'Alice', comment: 'Amazing work! The photos came out beautiful.' },
        { user: 'Bob', comment: 'Highly professional and talented photographer.' },
        { user: 'Bob', comment: 'Highly professional and talented photographer.' },
      ],
    },
  ];
  
  export const bookingOptions = [
    { id: '1', date: 'November 5, 2024', time: '10:00 AM', price: '$200' },
    { id: '2', date: 'November 6, 2024', time: '2:00 PM', price: '$200' },
    { id: '3', date: 'November 7, 2024', time: '1:00 PM', price: '$150' },
  ];
  