// app/actions.ts (Server Action)
'use server'

export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }
  
  // Logic to send email or save to a database
  console.log("Form submitted:", data);
  return { success: true };
}