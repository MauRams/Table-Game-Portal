<?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
      <head>
        <style>
          table{
          padding-bottom:10px;
          border: 2px solid black;
          }
          td{
          color: #000;
          padding: 5px;
          }
          th{
          background-color: yellow;
          color: #000;
          }
          
          table{
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
          }
          
          h2{
          margin-left: auto;
          margin-right: auto;
          }
          
        </style>
      </head>
        <body>
          <div class ="main_window">
          <h2 class='text-center'>High Scores</h2>
            <table border = "1">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Game</th>
                <th>High Score</th>
              </tr>
              <xsl:for-each select="rss/channel/item">
                <tr>
                  <td><xsl:value-of select = "name"/></td>
                  <td><xsl:value-of select = "email"/></td>
                  <td><xsl:value-of select = "game"/></td>
                  <td><xsl:value-of select = "hiScore"/></td>
                </tr>
              </xsl:for-each>
            </table>
            </div>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>