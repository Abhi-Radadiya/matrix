// pages/_document.js
import Document, { Html, Head, Main } from "next/document";

function getCssLinks() {
    // Replace the URLs with your own stylesheet URLs
    const cssUrls = [
        "https://stijndv.com/fonts/Eudoxus-Sans.css",
        // Add more stylesheet URLs as needed
    ];

    return cssUrls.map((url) => <link key={url} rel='stylesheet' href={url} />);
}

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Call the getCssLinks function to include the CSS link elements */}
                    {getCssLinks()}
                </Head>
                <body>
                    <Main />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
