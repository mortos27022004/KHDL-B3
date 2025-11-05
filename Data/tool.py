import csv
import json
from pathlib import Path

def update_db_from_csv(csv_path: str):
    """
    Đọc file CSV sản phẩm và ghi vào db.json cùng thư mục.
    - Nếu db.json chưa có: tạo mới.
    - Nếu đã có: chỉ thêm/cập nhật phần "products", không xóa dữ liệu khác.
    - Các ô trống trong CSV -> để chuỗi rỗng "" trong JSON.
    """

    csv_file = Path(csv_path)
    db_file = Path("Data/db.json")

    # 1️⃣ Đọc dữ liệu từ CSV
    with open(csv_file, "r", encoding="utf-8") as f:
        new_products = []
        reader = csv.DictReader(f, delimiter=',') 
        for row in reader:
            product = {
                "id": int(row["id"]) if row.get("id") else None,
                "category": row.get("category", "").strip(),
                "name": row.get("name", "").strip(),
                "brand": row.get("brand", "").strip(),
                "price": row.get("price", "").strip(),
                "original_price": row.get("original_price", "").strip(),
                "discount_rate": row.get("discount_rate", "").strip(),
                "rating_average": row.get("rating_average", "").strip(),
                "review_count": row.get("review_count", "").strip(),
                "seller": row.get("seller", "").strip(),
                "quantity_sold": row.get("quantity_sold", "").strip(),
                "thumbnail_url": row.get("thumbnail_url", "").strip()
            }
            new_products.append(product)

    print(f"✅ Đọc {len(new_products)} sản phẩm từ {csv_file.name}")

    # 2️⃣ Đọc db.json hiện tại
    if db_file.exists():
        with open(db_file, "r", encoding="utf-8") as f:
            try:
                db = json.load(f)
            except json.JSONDecodeError:
                db = {}
    else:
        db = {}

    # 3️⃣ Khởi tạo trường "products" nếu chưa có
    if "products" not in db or not isinstance(db["products"], list):
        db["products"] = []

    # 4️⃣ Tạo map để kiểm tra trùng ID
    existing = {p["id"]: p for p in db["products"] if "id" in p and p["id"] is not None}

    # 5️⃣ Thêm hoặc cập nhật
    count_new, count_updated = 0, 0
    for p in new_products:
        pid = p["id"]
        if pid in existing:
            existing[pid].update(p)
            count_updated += 1
        else:
            db["products"].append(p)
            existing[pid] = p
            count_new += 1

    # 6️⃣ Ghi lại db.json
    with open(db_file, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

    print(f"💾 Đã cập nhật {db_file.name}")
    print(f"➕ {count_new} sản phẩm mới, 🔄 {count_updated} sản phẩm cập nhật")


# -------------------------------
# Ví dụ chạy thử
# -------------------------------
if __name__ == "__main__":
    update_db_from_csv(r"C:\Users\Gearvn\Downloads\tiki_all_products.csv")
