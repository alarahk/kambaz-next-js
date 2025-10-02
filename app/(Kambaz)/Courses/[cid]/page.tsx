import { redirect } from "next/navigation";

export default function CourseLanding({ params }: { params: { cid: string } }) {
  const { cid } = params;
  redirect(`/Courses/${cid}/Home`);
  return null;
}