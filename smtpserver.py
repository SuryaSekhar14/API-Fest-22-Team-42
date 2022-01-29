from email import message
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
import email.mime.application
import email
from jinja2 import Environment

def sendmail(reciever):

  html = '''
   Here is your combined PDF file.
  '''

  html_part = MIMEText(
          Environment().from_string(html).render(
          ), "html"
      )

  msg_alternative = MIMEMultipart('alternative')
  msg_alternative.attach(html_part)

  filename='outputs/combined.pdf'
  fp=open(filename,'rb')
  attachment = email.mime.application.MIMEApplication(fp.read(),_subtype="pdf")
  fp.close()

  attachment.add_header('Content-Disposition', 'attachment', filename='combined.pdf')
  msg_mixed = MIMEMultipart('mixed')
  msg_mixed.attach(msg_alternative)
  msg_mixed.attach(attachment)
  msg_mixed['From'] = 'sadsapi.noreply@gmail.com'
  msg_mixed['To'] = str(reciever)
  msg_mixed['Subject'] = "SADS APIs | Combined PDF"
  
  smtp_obj = smtplib.SMTP('smtp.gmail.com', 587)
  smtp_obj.ehlo()
  smtp_obj.starttls()
  smtp_obj.ehlo()
  smtp_obj.login('sadsapi.noreply@gmail.com', 'dbabyfatsun')
  smtp_obj.sendmail(msg_mixed['From'], reciever, msg_mixed.as_string())
  smtp_obj.quit()