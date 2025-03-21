import React from 'react'
import './footer.css'
import Telegram from '../../assets/Telegram'
import Email from '../../assets/Email'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_title">
        Каталог литературы библиотеки Бендерской церкви
      </p>
      <div className="footer_mess_cont">
        <p className="footer_p">Для отзывов и предложений:</p>
        <div className="footer_mess_cont_item">
          <a
            className="footer_telegram"
            href="tg://resolve?domain=EliTrif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram width={20} height={20} />
          </a>
          <a
            className="footer_telegram"
            href="mailto:slavaberzan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
