import { redirect } from "next/navigation";

export default function CourseIndex({ params: { cid } }: { params: { cid: string } }) {
  redirect(`/Courses/${cid}/Home`);
}