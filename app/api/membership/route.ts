import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'EGIC Membership <onboarding@resend.dev>', // Use your verified domain
      to: ['egic.contact@gmail.com'],
      subject: 'New Membership Application',
      html: `
        <h2>New Membership Application</h2>
        
        <h3>Personal Information</h3>
        <p><strong>Membership No:</strong> ${formData.membershipNo || 'N/A'}</p>
        <p><strong>Title:</strong> ${formData.title}</p>
        <p><strong>Name:</strong> ${formData.title} ${formData.surname} ${formData.otherNames}</p>
        <p><strong>Alias:</strong> ${formData.alias || 'N/A'}</p>
        <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>State of Origin:</strong> ${formData.stateOfOrigin}</p>
        <p><strong>LGA:</strong> ${formData.lga}</p>
        <p><strong>Marital Status:</strong> ${formData.maritalStatus}</p>
        <p><strong>Religion:</strong> ${formData.religion}</p>
        
        <h3>Professional Information</h3>
        <p><strong>Profession:</strong> ${formData.profession}</p>
        <p><strong>Business/Office Address:</strong> ${formData.businessAddress}</p>
        <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
        <p><strong>Contact Number:</strong> ${formData.contactNumber}</p>
        
        <h3>Next of Kin Information</h3>
        <p><strong>Name:</strong> ${formData.nextOfKinName}</p>
        <p><strong>Address:</strong> ${formData.nextOfKinAddress}</p>
        <p><strong>Relationship:</strong> ${formData.nextOfKinRelationship}</p>
        <p><strong>Phone Number:</strong> ${formData.nextOfKinPhone}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}