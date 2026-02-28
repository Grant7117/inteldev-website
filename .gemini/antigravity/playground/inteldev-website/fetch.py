import urllib.request
import re
import sys

def fetch_and_extract(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Strip scripts and styles
        html = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.DOTALL | re.IGNORECASE)
        # Strip all HTML tags
        text = re.sub(r'<[^>]+>', ' ', html)
        # Normalize whitespace
        text = re.sub(r'\s+', ' ', text).strip()
        print(text[:2000])
        print("...")
        print(text[-2000:])
        
        # For developments, search for development names specifically if possible, but dumping the text is good enough for me to read it.
        # dump the raw text so we can read it.
        with open('scraped_content.txt', 'a', encoding='utf-8') as f:
            f.write(f"\n\n--- URL: {url} ---\n\n")
            f.write(text)
            
    except Exception as e:
        print(f"Error fetching {url}: {e}")

if __name__ == '__main__':
    for url in sys.argv[1:]:
        fetch_and_extract(url)
