import React from 'react'
import MailChimp from '../../_plugins/MailChimp';

// import { useTranslation } from "next-i18next";

export default function Newsletter({className}) {
    // const { t } = useTranslation("common");
    return (
        <div className={`newsletter-section ${className}`}>
            <MailChimp mailChimpAction={`https://oreus.us6.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_USER_ID}&id=${process.env.MAILCHIMP_AUDIENCE_ID}`} />
        </div>
    )
}