import { ReactNode } from "react";
import Navigation from "./Navigation";

export default function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { cid: string };
}) {
  const { cid } = params;

  return (
    <div id="wd-courses">
      <div>
        <table>
          <tbody>
            <tr>
              <td valign="top" width="200">
                <Navigation />
              </td>
                            <td valign="top" style={{ marginLeft: "20px" }}>
                {children}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}