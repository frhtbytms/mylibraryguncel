# MSB Library — Kütüphane Otomasyon Ara Yüzü

Yazar: Ferhat Bayutmuş (GitHub: frhtbytms)

Bu proje, dersinizde geliştirilen "kütüphane web otomasyon sistemi" için basit ve temiz bir ön yüz (frontend) örneğidir. İçinde anasayfa, hakkımızda, iletişim, giriş formu ve mock admin paneli sayfaları bulunur.

## Hızlı Başlangıç (Quick start)

Gereksinimler:
- Python 3 (lokal basit HTTP sunucusu için)
- Git (sürüm kontrolü için)

Yerel olarak çalıştırmak için (PowerShell veya benzeri terminalde proje kökünde):

```powershell
# Proje klasörüne gidin
cd "C:\Users\<kullanici>\OneDrive\Masaüstü\msblibrary"

# Basit HTTP sunucusu başlat (tarayıcıda http://localhost:8000)
python -m http.server 8000
```

Tarayıcıda açın: `http://localhost:8000`

Not: Doğrudan dosyayı çift tıklayıp açmak da çalışır, fakat bazı tarayıcılarda relative path veya güvenlik kısıtları nedeniyle CSS/JS yüklenmeyebilir — bu yüzden `http.server` ile servis etmek önerilir.

## Dosya Yapısı (özet)

- `index.html` — Anasayfa
- `about.html` — Hakkımızda / Misyon / Vizyon
- `contact.html` — İletişim formu (UI-only)
- `login.html` — Giriş formu (UI-only)
- `admin.html` — Mock admin paneli
- `css/genel.css` — Ortak stil dosyası
- `js/genel.js` — Küçük yardımcı JS dosyası
- `logo.png`, `favicon.ico` — Placeholder görseller


