import os
import glob
import re

CSS_DIR = "src/components"
TSX_DIR = "src/components"

def update_css_files():
    for fpath in glob.glob(f"{CSS_DIR}/*.module.css"):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        # Update specific dark values that should be foreground
        if "hero.module.css" in fpath:
            content = content.replace("var(--background)", "var(--primary-dark)")
            content = content.replace("rgba(212, 175, 55, 0.05)", "rgba(255, 255, 255, 0.05)")
            content = content.replace("var(--primary)", "#ffffff")
            content = content.replace("var(--primary-dark)", "#f2f4f5")
        else:
            content = content.replace("color: #fff;", "color: var(--primary-dark);")
            content = content.replace("color: #ffffff;", "color: var(--primary-dark);")
            content = content.replace("background-color: var(--background);", "background-color: var(--surface);")
            content = content.replace("background-color: #1a1a1f;", "background-color: var(--background);")
            content = content.replace("rgba(212, 175, 55, 0.2)", "rgba(42, 83, 117, 0.2)")
            content = content.replace("rgba(212, 175, 55, 0.1)", "rgba(42, 83, 117, 0.1)")

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)

def update_tsx_files():
    for fpath in glob.glob(f"{TSX_DIR}/*.tsx"):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        content = content.replace('className="gold-text"', 'className="primary-text"')
        
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)

if __name__ == "__main__":
    update_css_files()
    update_tsx_files()
    print("Updates applied successfully.")
