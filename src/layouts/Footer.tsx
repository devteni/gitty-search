import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
            <svg>

            </svg>
            <p>Copyright &copy; {year}. All rights reserverd.</p>
        </div>
    </footer>
  )
}

export default Footer