#!/usr/bin/env python3
"""Genera el código QR de la carta para imprimir en las mesas.

Uso:
    python3 generar_qr.py https://santpt.github.io/chiringuito_Rio_Cofio/

Genera 'qr_carta.png' en alta resolución con corrección de errores H
(aguanta hasta un 30% de deterioro: impresión pequeña, desgaste, manchas).
"""

import sys
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# Paleta de colores personalizada
AZUL_BALDOSIN = (21, 48, 78)      # #15304E, el azul del baldosín
CREMA = (247, 243, 234)           # #F7F3EA, el fondo de la web


def main() -> None:
    # Validar que se haya pasado la URL como argumento
    if len(sys.argv) != 2:
        print("Error: Falta la URL.")
        print("Uso correcto: python3 generar_qr.py https://santpt.github.io/chiringuito_Rio_Cofio/")
        sys.exit(1)

    url = sys.argv[1]

    # Configuración del generador QR
    qr = qrcode.QRCode(
        version=1,
        error_correction=ERROR_CORRECT_H,
        box_size=20,   # Píxeles por módulo -> imagen grande y nítida para impresión
        border=4,      # Margen blanco obligatorio alrededor (quiet zone)
    )
    qr.add_data(url)
    qr.make(fit=True)

    # Crear la imagen con los colores personalizados
    imagen = qr.make_image(fill_color=AZUL_BALDOSIN, back_color=CREMA)
    
    # Guardar en el disco
    imagen.save("qr_carta.png")

    # Mensajes de éxito en la terminal
    print("-" * 50)
    print(f"¡QR generado con éxito para: {url}")
    print(f"Archivo guardado como: qr_carta.png ({imagen.size[0]}x{imagen.size[1]} px)")
    print("Consejo: Imprimir a 4x4 cm como mínimo y probar con varios móviles antes de plastificar.")
    print("-" * 50)


if __name__ == "__main__":
    main()