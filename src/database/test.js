const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  
  // insert data into the table
  // await saveOrphanage(db, {
  //   lat: '-27.222633',
  //   lng: '-49.6455874',
  //   name: 'Lar das Meninas 👧',
  //   about: 'Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
  //   whatsapp: '8468486464894',
  //   images: [
  //     'https://images.unsplash.com/photo-1601564921698-0166194c51ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  //     'https://images.unsplash.com/photo-1597553954309-30454e8502f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  //   ].toString(),
  //   instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
  //   opening_hours: 'Horário de visitas Das 18h até 8h',
  //   open_on_weekends: '1'

  //   }
  // );

  // consult table data
  let selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  // consult only 1 orphanage, by id
  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  // console.log(orphanage);

  // elete data from table
  // console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'));


});

