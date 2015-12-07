<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <style>
      .left{
        float:left;
      }
      .messageBody{
        border:1px solid black;
      }
    </style>



      <!-- Tab panes -->
       <div class="tab-content">
                <div class="tab-pane fade in active" id="home">
                    <div class="list-group">

    
      <xsl:for-each select="scores/score">
        <xsl:sort order="descending" select="position()" data-type="number"/>
          <a href="#" class="list-group-item">
          <span class="glyphicon glyphicon-star-empty"></span>
          <span class="name" style="min-width:120px;display: inline-block;"><xsl:value-of select="game"/> </span>
          
          <span class="name" style="min-width:120px;display: inline-block;"> Player Name: <xsl:value-of select="playerName"/> </span>
          
          <span class="name" style="min-width:120px;display: inline-block;"> SCORE:
          <xsl:value-of select="userScore"/> / <xsl:value-of select="computerScore"/></span>
           <span class="badge"><xsl:value-of select="date"/></span>
           <br/>
          
          <br/>
   
     
     
     </a>

      </xsl:for-each>
      
      
      
            </div>
      </div>
    </div>

</xsl:template>
</xsl:stylesheet>

