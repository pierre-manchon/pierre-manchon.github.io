SIDM
----
Satellite Imagery Data Collector

Objectives
----

Quatres interfaces:
    - Listing
    - Gestion
    - Téléchargement
    - Visualisation (cartopy, matplotlib)

Les traitements seront programmables depuis l'interface gestion
Les trois autres interfaces ne serviront  que de manière ponctuelle :
    - l'interface listing exécutée après l'interface téléchargement de manière automatique.
    - l'interface visualisation après l'interface listing pour visualiser un histogramme s dates et une carte des tuiles

https://www.python.org/dev/peps/pep-0257/

COMMAND LINE
----
The CLI should be used like this at the final stage of usability

`../python.exe ../SIDM_CLI.py -program=Landsat -sensor=OLI-TIRS -satellite=Landsat 8 -processing_correction_level=L1TP
-wrs_path=187 -wrs_row=022 -acquisition_date=20190202 -processing_year=None -collection_number=None
-collection_category=None`