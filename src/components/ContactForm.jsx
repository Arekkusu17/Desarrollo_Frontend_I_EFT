import { useState } from 'react'

function ContactForm() {
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState('success')

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name').trim()
    const email = form.get('email').trim()
    const message = form.get('message').trim()
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!name || !email || !message) {
      setFeedbackType('danger')
      setFeedback('Completa nombre, email y mensaje antes de enviar.')
      return
    }

    if (!isValidEmail) {
      setFeedbackType('danger')
      setFeedback('Ingresa un email valido para poder responder tu consulta.')
      return
    }

    setFeedbackType('success')
    setFeedback(`Gracias, ${name}. Tu mensaje fue enviado correctamente.`)
    event.currentTarget.reset()
  }

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-lg-5">
            <p className="text-uppercase section-label mb-2">Contacto</p>
            <h2 className="h1 fw-bold">Habla con la tienda</h2>
            <p className="text-muted-custom">
              Usa el formulario para consultar disponibilidad, promociones o ayuda con una compra.
            </p>
          </div>
          <div className="col-lg-7">
            <form className="contact-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="contactName">Nombre</label>
                  <input className="form-control" id="contactName" name="name" type="text" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="contactEmail">Email</label>
                  <input className="form-control" id="contactEmail" name="email" type="email" required />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="contactMessage">Mensaje</label>
                  <textarea className="form-control" id="contactMessage" name="message" rows="4" required></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-brand btn-lg" type="submit">Enviar mensaje</button>
                </div>
              </div>
            </form>
            {feedback && <div className={`alert alert-${feedbackType} mt-3`} aria-live="polite">{feedback}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
