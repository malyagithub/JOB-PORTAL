import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">

    

      <h2 className="text-sm mb-4 md:mb-0">© 2024 Your Company. All rights reserved.</h2>
      
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
          <svg className="h-6 w-6 fill-currentColor" viewBox="0 0 24 24">
            <path d="M22.676 0H1.324C0.592 0 0 0.592 0 1.324v21.352C0 23.408 0.592 24 1.324 24h21.352c0.732 0 1.324-0.592 1.324-1.324V1.324C24 0.592 23.408 0 22.676 0zm-6.66 12h-3.52v12H9.31v-12H7.62v-3.42h1.69v-2.6c0-2.23 1.28-3.6 3.34-3.6 0.99 0 2.04 0.07 2.47 0.13v2.86h-1.47c-1.16 0-1.42 0.61-1.42 1.23v2.51h3.05l-0.44 3.42z" />
          </svg>
        </a>

        <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
          <svg className="h-6 w-6 fill-currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.84 9.84 0 01-2.828.775 4.93 4.93 0 002.164-2.723 9.85 9.85 0 01-3.127 1.19A4.916 4.916 0 0016.96 3c-2.73 0-4.95 2.22-4.95 4.95 0 .39.04.77.12 1.13-4.11-.21-7.74-2.18-10.18-5.19a4.92 4.92 0 00-.67 2.49c0 1.72.87 3.23 2.19 4.12a4.91 4.91 0 01-2.24-.616v.06c0 2.4 1.71 4.41 3.98 4.86a4.936 4.936 0 01-2.23.085c.63 1.96 2.46 3.39 4.63 3.43a9.88 9.88 0 01-7.3 2.05c2.29 1.47 5.02 2.33 7.89 2.33 9.46 0 14.64-7.84 14.64-14.64 0-.22 0-.44-.02-.66A10.04 10.04 0 0024 4.557z" />
          </svg>
        </a>

        <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
  <svg className="h-6 w-6 fill-currentColor" viewBox="0 0 24 24">
    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.07 19.02H4.58V9.59h2.49v9.43zm-1.24-11.15c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43c.79 0 1.43.64 1.43 1.43s-.64 1.43-1.43 1.43zm13.03 11.15h-2.49v-4.73c0-1.13-.2-2.05-1.47-2.05-1.39 0-1.99 1.02-1.99 2.06v4.72h-2.49v-9.43h2.49v1.27c.33-.51.92-1.27 2.24-1.27 1.63 0 3.02 1.08 3.02 3.42v6.03z" />
  </svg>
</a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer