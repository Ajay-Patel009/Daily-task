import nodemailer from 'nodemailer';

const sendEmail = async (email: string, subject: string, text: string) => {
    try {
        // const transporter = nodemailer.createTransport({
        //     host: process.env.HOST,
        //     service: process.env.SERVICE,
        //     port: 587,
        //     secure: true,
        //     auth: {
        //         user: process.env.USER,
        //         pass: process.env.PASS,
        //     },
        // });

        // await transporter.sendMail({
        //     from: process.env.USER,
        //     to: email,//email
        //     subject: subject,
        //     text:  text,
        // });


        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'jacques44@ethereal.email',
                pass: 'mwrNVr8NpXvPKZ3DYf'
            }
        });
        await transporter.sendMail({
            from: 'jacques44@ethereal.email' ,  // process.env.USER,
            to: email,//email
            subject: subject,
            text:  text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

 export default sendEmail;