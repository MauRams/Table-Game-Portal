<?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
      <head/>
        <body>
          <h2>High Scores</h2>
            <table border = "1">
              <tr bgcolor = "#9acd32">
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
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>