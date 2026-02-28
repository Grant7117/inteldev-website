import os
import glob
import re

CSS_DIR = "src/components"
TSX_DIR = "src/components"

def update_css_files():
    for fpath in glob.glob(f"{CSS_DIR}/*.module.css"):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        # Revert to dark theme variable names
        content = content.replace("var(--primary-dark)", "#fff")
        content = content.replace("color: var(--primary-dark);", "color: #fff;")
        if "hero.module.css" in fpath:
            pass # We'll just manually fix background if needed, but it should be using var(--background)
            
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)

if __name__ == "__main__":
    update_css_files()
    print("Updates applied successfully.")
