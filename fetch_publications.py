import requests
from bs4 import BeautifulSoup
import json

# URL of the Google Scholar profile
SCHOLAR_URL = "https://scholar.google.se/citations?hl=sv&user=WauDzPUAAAAJ&view_op=list_works&sortby=pubdate"

# Fetch the webpage content
response = requests.get(SCHOLAR_URL, headers={"User-Agent": "Mozilla/5.0"})
html = response.text

# Parse the HTML
soup = BeautifulSoup(html, "html.parser")

# Extract publication data
publications = []
for row in soup.select(".gsc_a_tr"):  # Selects each publication row
    title_element = row.select_one(".gsc_a_at")
    title = title_element.text.strip()
    link = "https://scholar.google.se" + title_element["href"]

    author_element = title_element.find_next_sibling()
    authors = author_element.text.strip() if author_element else "Unknown"

    year_element = row.select_one(".gsc_a_y")
    year = year_element.text.strip() if year_element else "Unknown"

    publications.append({
        "title": title,
        "link": link,
        "authors": authors,
        "date": year
    })

# Save the data to a JSON file
with open("publications.json", "w", encoding="utf-8") as f:
    json.dump(publications, f, ensure_ascii=False, indent=4)

print("✅ Publications JSON file updated successfully.")
