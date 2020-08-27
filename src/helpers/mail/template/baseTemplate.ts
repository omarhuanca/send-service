
/* eslint-disable */

export default (params: any): string => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset='utf-8'/>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
      <title>${params.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
    </head>
    <body>
      <table cellspacing="0" cellpadding="10" style="color: #666; font: 13px Arial; line-height: 1.4em; width: 100%;">
        <tbody>
          <tr>
            <td style="color: #4d90fe; font-size: 22px; border-bottom: 2px solid #4d90fe;">
              ${params.name}
            </td>
          </tr>
          <tr>
            <td style="color: #777; font-size: 16px; padding-top: 5px;">
              DESCRIPTION
              ${params.description}
            </td>
          </tr>
          <tr>
            <td>
              ${params.content}
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  `;
};
