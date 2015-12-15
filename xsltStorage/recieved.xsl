<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
   
<style>
.left{
        float:left;
      }
.messageBody{
        border:5px solid yellow;
      }
    </style>



      <!-- Tab panes -->
       <div class="tab-content">
                <div class="tab-pane fade in active" id="home">
                    <div class="list-group">

    
      <xsl:for-each select="messages/recieved">
          <xsl:sort order="descending" select="position()" data-type="number"/>
        
          <a href="#" class="list-group-item">
          <span class="glyphicon glyphicon-star-empty"></span>
          <span class="name" style="min-width: 120px;display: inline-block;color:orange;font-weight:bold">From: <xsl:value-of select="user"/>;</span>
          <br/><br/>
     <span class="text-muted" style="font-size: 11px;"><xsl:value-of select="text"/></span></a>
      <span class="badge"><xsl:value-of select="date"/></span>

      </xsl:for-each>
      
      
      
            </div>
      </div>
    </div>

</xsl:template>
</xsl:stylesheet>

