#!/usr/bin/env python3
"""Genera el código QR de la carta para imprimir en las mesas.

Uso:
    python3 generar_qr.py https://TU_USUARIO.github.io/chiringuito-cofio/

Genera 'qr_carta.png' en alta resolución con corrección de errores H
(aguanta hasta un 30% de deterioro: impresión pequeña, desgaste, manchas).
"""

import sys

import qrcode
from qrcode.constants import ERROR_CORRECT_H

AZUL_BALDOSIN = (21, 48, 78)      # #15304E, el azul del baldosín
CREMA = (247, 243, 234)           # #F7F3EA, el fondo de la web


def main() -> None:
    if len(sys.argv) != 2:
        print("Uso: python3 generar_qr.py <URL de la carta>")
        sys.exit(1)

    url = sys.argv[1]

    qr = qrcode.QRCode(
        error_correction=ERROR_CORRECT_H,
        box_size=20,   # píxeles por módulo -> imagen grande, nítida al imprimir
        border=4,      # margen blanco obligatorio alrededor (quiet zone)
    )
    qr.add_data(url)
    qr.make(fit=True)

    imagen = qr.make_image(fill_color=AZUL_BALDOSIN, back_color=CREMA)
    imagen.save("qr_carta.png")

    print(f"QR generado para: {url}")
    print(f"Archivo: qr_carta.png ({imagen.size[0]}x{imagen.size[1]} px)")
    print("Consejo: imprimir a 4x4 cm como mínimo y probar con varios móviles.")


if __name__ == "__main__":
    main()
