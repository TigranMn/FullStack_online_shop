import { useState } from 'react';
//MUI
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionPage = () => {
   const [expanded, setExpanded] = useState<string | false>(false);

   const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <div>
         <Typography sx={{ textAlign: 'center' }} variant='h4'>
            FAQ
            <hr />
         </Typography>
         <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1bh-content'
               id='panel1bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  What if my watch stops working?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  If you suspect your item is faulty please return it to us at your earliest
                  convenience. Our returns address is as follows: Watchshop Returns PO BOX 8174
                  Reading Berkshire RG6 9PE We recommend using a special delivery service so that
                  the item is insured and trackable on it's way back. Retain your receipt for
                  postage and we will reimburse you for the cost if a manufacturing fault is
                  confirmed. Our returns department is incredibly efficient and dedicated to
                  resolving any and all issues as quickly as possible.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel2bh-content'
               id='panel2bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  What is Security Validation?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Unfortunately the industry we operate in experiences a number of fraudulent
                  incidents. F or this reason, our levels of security far exceed other online
                  businesses; this is to protect both our customers and WatchShop. Our security team
                  needs further information from you before your order can be processed. You should
                  have received an email from the team, but if you haven't please contact them
                  directly at security@watchshop.com. Please note, the security process cannot be
                  resolved over the phone.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel3bh-content'
               id='panel3bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  When will I be refunded?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  99% of refunds are processed on the day that the item is returned to us, but due
                  to the seasonal period some refunds may take slightly longer to process. The
                  returns department will process all refunds as quickly as possible. We ask for up
                  to 14 working days for refunds to be processed. The Returns department cannot be
                  reached via the phone, but if after 14 days you haven't received your refund
                  please contact us at helpdesk@watchshop.com.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel4bh-content'
               id='panel4bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  Why are your prices so low?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  WatchShop delivers thousands of watches to customers every day in an absolutely
                  efficient manner, enabling us under certain circumstances to offer special offers
                  and exclusives. However, just because we sell watches in great quantities, that
                  doesn't mean you won't receive the same after care that you would benefit from if
                  purchased at a high street store. Our sales lines are open 7 days a week and in
                  the event of any problem our customer support lines are open Monday to Saturday.
                  You also receive full technical support from the manufacturer, as well as their
                  fully authorised warranty.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1bh-content'
               id='panel1bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  What if my watch stops working?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  If you suspect your item is faulty please return it to us at your earliest
                  convenience. Our returns address is as follows: Watchshop Returns PO BOX 8174
                  Reading Berkshire RG6 9PE We recommend using a special delivery service so that
                  the item is insured and trackable on it's way back. Retain your receipt for
                  postage and we will reimburse you for the cost if a manufacturing fault is
                  confirmed. Our returns department is incredibly efficient and dedicated to
                  resolving any and all issues as quickly as possible.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1bh-content'
               id='panel1bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  What if I order a watch and I don't like it?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  We operate a full 14 days refund policy, where if you change your mind on any
                  purchase you can return it to us within 14 days for a full refund. All we ask is
                  that the watch is returned to us unworn.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1bh-content'
               id='panel1bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  Are batteries included in the watches?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Yes, brand new batteries are included in all watches. These are fitted at the
                  factory by the manufacturer - your watch is ready to wear as soon as you receive
                  it.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1bh-content'
               id='panel1bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  Do you sell secondhand watches?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>No. We only sell 100% brand new goods.</Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1bh-content'
               id='panel1bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  Do you sell fake/replica watches?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  No. All of our watches are 100% genuine products, supplied to us directly from the
                  manufacturer.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls='panel1bh-content'
               id='panel1bh-header'
            >
               <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                  Do your watches come in a box?
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Yes, all of our watches come in the official box from the correct manufacturer,
                  exactly as you would get if you were to purchase them in a high street retailer.
                  An example picture of product packaging is listed on each product details page. We
                  do not sell loose, unboxed watches.
               </Typography>
            </AccordionDetails>
         </Accordion>
      </div>
   );
};
export default AccordionPage;
