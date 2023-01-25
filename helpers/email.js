import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    const { nombre, email, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      //Informacion del email
      const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Confirma tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `
            <p>Hola: ${nombre} comprueba tu cuenta en UpTask</p>
            <p>Tu cuenta está casi lista, sólo debes comprobarla en el siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            </p>

            <p>Si tu no creaste esta cuenta ignora este mail</p>
        
        `
      })
}

export const emailOlvidePassword = async (datos) => {
  const { nombre, email, token } = datos;

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //Informacion del email
    const info = await transport.sendMail({
      from: '"UpTask - Administrador de proyectos" <cuentas@uptask.com>',
      to: email,
      subject: "UpTask - Reestablece tu password",
      text: "Reestablece tu password",
      html: `
          <p>Hola: ${nombre} has solicitado reestablecer tu password</p>
          <p>Sigue el siguiente enlace para reestablecer tu password:
              <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
          </p>

          <p>Si tu no solicitaste reestablecer tu password, puedes ignorar el mensaje</p>
      
      `
    })
}