
  window.addEventListener('digiohLeadSubmitted', function (e) {
    const detail = e.detail.data;
    if (!detail) {
      return;
    }

    const user = {
      email: detail.email,
    };

    for (const key in user) {
      if (!user[key]) {
        delete user[key];
      }
    }

    if (Object.keys(user).length) {
      edgetag(
        'data',
        user,
        {},
        { destination: 'https://dsscv.laurageller.online' }
      );

      edgetag(
        'tag',
        'Lead',
        {},
        {},
        { destination: 'https://dsscv.laurageller.online' }
      );
    }
  });
