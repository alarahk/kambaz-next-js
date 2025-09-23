import { ReactNode } from "react";
import Navigation from "./Navigation";

export default function KambazLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div id="wd-kambaz">
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