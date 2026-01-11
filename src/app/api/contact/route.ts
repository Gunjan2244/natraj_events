import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, eventType, date, guests, budget, message } = body;

        // Create a transporter
        // NOTE: In production, use environment variables for user and pass
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER || 'your-email@gmail.com', // fallback for dev without env
                pass: process.env.GMAIL_PASS || 'your-app-password',
            },
        });

        // Admin Email Template (Existing)
        const adminHtmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #EC4899 0%, #F59E0B 100%); padding: 40px 0; text-align: center; color: white; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px; }
        .content { padding: 40px; }
        .field { margin-bottom: 24px; border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; }
        .field:last-child { border-bottom: none; }
        .label { display: block; font-size: 12px; text-transform: uppercase; color: #9ca3af; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 8px; }
        .value { font-size: 16px; color: #1f2937; font-weight: 500; line-height: 1.5; }
        .footer { background-color: #f9fafb; padding: 24px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 99px; background-color: #fce7f3; color: #be185d; font-size: 12px; font-weight: 600; }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>New Event Enquiry 🎉</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">
                Submitted via Natraj Events Website
            </p>
        </div>

        <div class="content">
            <div class="field">
                <span class="label">Client Name</span>
                <div class="value">${name}</div>
            </div>

            <div class="field">
                <span class="label">Contact Email</span>
                <div class="value">
                    <a href="mailto:${email}" style="color: #EC4899; text-decoration: none;">
                        ${email}
                    </a>
                </div>
            </div>

            <div class="field">
                <span class="label">Type of Event</span>
                <div class="value">
                    <span class="badge">${eventType}</span>
                </div>
            </div>

            <div class="field">
                <span class="label">Event Date</span>
                <div class="value">${date}</div>
            </div>

            <div class="field">
                <span class="label">Estimated Guest Count</span>
                <div class="value">${guests} people</div>
            </div>

            <div class="field">
                <span class="label">Expected Budget</span>
                <div class="value">${budget}</div>
            </div>

            <div class="field">
                <span class="label">Client’s Vision / Notes</span>
                <div class="value" style="white-space: pre-wrap;">
                    ${message || "No additional message provided by the client."}
                </div>
            </div>
        </div>

        <div class="footer">
            <p>
                &copy; ${new Date().getFullYear()} Natraj Events
            </p>
            <p>
                This enquiry was automatically generated from your website contact form.
            </p>
        </div>
    </div>
</body>
</html>
`;


        // User Confirmation Email Template (Premium)
        const userHtmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fff1f2; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border: 1px solid #fce7f3; }
        .header { background-image: url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069'); background-size: cover; background-position: center; padding: 60px 40px; text-align: center; color: white; position: relative; }
        .header::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)); }
        .header-content { position: relative; z-index: 10; }
        .logo { font-size: 32px; font-weight: 800; margin-bottom: 16px; letter-spacing: -1px; background: -webkit-linear-gradient(#fff, #fce7f3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .greeting { font-size: 24px; font-weight: 300; margin: 0; }
        .content { padding: 40px; text-align: center; }
        .message { font-size: 18px; color: #4b5563; line-height: 1.6; margin-bottom: 32px; }
        .highlight { color: #db2777; font-weight: 600; }
        .details-box { background-color: #fdf2f8; border-radius: 16px; padding: 24px; text-align: left; margin-bottom: 32px; border: 1px solid #fbcfe8; }
        .detail-row { display: flex; justify-content: space-between; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #f9a8d4; }
        .detail-row:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
        .detail-label { font-size: 14px; color: #9d174d; font-weight: 600; }
        .detail-value { font-size: 14px; color: #831843; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #db2777 0%, #be185d 100%); color: white; padding: 16px 32px; border-radius: 99px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 10px 20px rgba(219, 39, 119, 0.3); transition: transform 0.2s; }
        .cta-button:hover { transform: translateY(-2px); }
        .footer { background-color: #fdf2f8; padding: 32px; text-align: center; color: #9d174d; font-size: 13px; }
        .social-links { margin-top: 16px; }
        .social-link { color: #db2777; text-decoration: none; margin: 0 8px; font-weight: 600; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="header-content">
                <div class="logo">Natraj Events</div>
                <h2 class="greeting">Namaste, ${name}! 🙏</h2>
            </div>
        </div>

        <div class="content">
            <p class="message">
                We’re so glad you reached out to <span class="highlight">Natraj Events</span> 💖  
                <br><br>
                Your upcoming <span class="highlight">${eventType}</span> already sounds exciting, and we can’t wait to help bring it to life. Our team is going through your details and thinking about how we can make your celebration truly special — the kind people talk about for years!
            </p>
            
            <div class="details-box">
                <div class="detail-row">
                    <span class="detail-label">When’s the big day?</span>
                    <span class="detail-value">${date}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Expected guests</span>
                    <span class="detail-value">${guests}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Your reference ID</span>
                    <span class="detail-value">#NAT-${Math.floor(Math.random() * 10000)}</span>
                </div>
            </div>

            <p style="color: #6b7280; font-size: 14px; margin-bottom: 32px;">
                One of our planners will personally get in touch with you within the next <strong>24 hours</strong> at  
                <strong>${email}</strong>.  
                <br><br>
                Until then, feel free to explore some of our recent work and get inspired ✨
            </p>

            <a href="https://natrajevents.com/portfolio" class="cta-button">
                Take a Look at Our Work
            </a>
        </div>

        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Natraj Events — crafted with love, care, and celebration.</p>
            <div class="social-links">
                <a href="#" class="social-link">Instagram</a> •
                <a href="#" class="social-link">Facebook</a> •
                <a href="#" class="social-link">WhatsApp</a>
            </div>
        </div>
    </div>
</body>
</html>
`;

        // Send Admin Email
        await transporter.sendMail({
            from: '"Natraj Events Website" <no-reply@natrajevents.com>',
            to: 'akash22rocks@gmail.com',
            subject: `✨ New Inquiry: ${eventType} by ${name}`,
            html: adminHtmlContent,
        });

        // Send User Confirmation Email
        await transporter.sendMail({
            from: '"Natraj Events" <akash2244everyone@gmail.com>',
            to: email, // Send to the user's email
            subject: `We received your inquiry, ${name}! 🎉`,
            html: userHtmlContent,
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
