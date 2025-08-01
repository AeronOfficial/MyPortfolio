import React from 'react';

function Contact() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #f7f6f6ff 0%, #f7f7f7ff 100%)',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <section style={{ maxWidth: '1100px', margin: '40px auto' }}>
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <img
            src="/aeron.jpg"
            alt="Profile"
            style={{
              width: '130px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 10px 100px rgba(0, 0, 0, 0.3)'
            }}
          />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }}>
          <div style={{ backgroundColor: '#f7faf7ff', borderRadius: '10px', padding: '20px', boxShadow: '0 8px 12px rgba(0,0,0,0.3)', color: '#000' }}>
            <h3><strong>Contact Number</strong></h3>
            <p><strong>Tnt:</strong> 0985 - 144 - 4297</p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', boxShadow: '0 8px 12px rgba(0,0,0,0.3)', color: '#000' }}>
            <h3><strong>Email</strong></h3>
            <p><strong>Personal Email:</strong> aeron142005@gmail.com</p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', boxShadow: '0 8px 12px rgba(0,0,0,0.3)', color: '#000' }}>
            <h3><strong>Location</strong></h3>
            <p><strong>Place:</strong> Zone 7, Bardias Villarosa, Licab, Nueva Ecija</p>
          </div>

          <div style={{ backgroundColor: '#eef5f0', borderRadius: '10px', padding: '20px', boxShadow: '0 8px 12px rgba(0,0,0,0.3)', color: '#000' }}>
            <h3><strong>Social Media</strong></h3>
            <p>
              <i className="fab fa-facebook" style={{ color: '#1877f2', marginRight: '8px' }}></i>
              <a href="https://www.facebook.com/aeron.javieraj" target="_blank" rel="noreferrer" style={{ color: '#1a55ff' }}>
                Facebook
              </a>
            </p>
            <p>
              <i className="fab fa-github" style={{ color: '#000', marginRight: '8px' }}></i>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#1a55ff' }}>
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
