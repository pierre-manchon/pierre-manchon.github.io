[![Documentation Status](https://readthedocs.org/projects/sidm/badge/?version=latest)](https://sidm.readthedocs.io/en/latest/?badge=latest)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/pierrot-m/sidm)
![python-version](https://img.shields.io/badge/python-3.8-blue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/pierrot-m/sidm)
[![GitHub license](https://img.shields.io/github/license/pierrot-m/SIDM)](https://github.com/pierrot-m/SIDM/blob/dev/LICENSE)

[![Requirements Status](https://requires.io/github/pierrot-m/SIDM/requirements.svg?branch=dev)](https://requires.io/github/pierrot-m/SIDM/requirements/?branch=dev)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/pierrot-m/sidm)
![GitHub issues](https://img.shields.io/github/issues/pierrot-m/sidm)
![GitHub closed issues](https://img.shields.io/github/issues-closed/pierrot-m/sidm)
---

#SIDM
Satellite Imagery Data Collector

##Objectives
Four interfaces:
    - Listing
    - Management
    - Downloading
    - Visualization (cartopy, matplotlib)

Processing will be monitored through the Management interface.
The three other ones will be used the following:
    - listing executed automatically after downloading
    - visualization (creation of maps and histograms) after listing to visualize what is stored.

https://www.python.org/dev/peps/pep-0257/

##Command-line Interface
The CLI should be used like this at the final stage of usability

```python 
python3 ../SIDM_CLI.py -program=Landsat -sensor=OLI-TIRS -satellite=Landsat 8 -processing_correction_level=L1TP
-wrs_path=187 -wrs_row=022 -acquisition_date=20190202 -processing_year=None -collection_number=None
-collection_category=None
```

##Websites
| Link |status|w3 certification|
|---|---|---|
|[pierrot-m.github.io/](https://pierrot-m.github.io/)|![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=light-green&up_message=up&url=https%3A%2F%2Fpierrot-m.github.io%2F)|![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fpierrot-m.github.io%2F)|
|[sidm.readthedocs.io/en/latest/](https://sidm.readthedocs.io/en/latest/)|![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=light-green&up_message=up&url=https%3A%2F%2Fsidm.readthedocs.io%2Fen%2Flatest%2F)|![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fsidm.readthedocs.io%2Fen%2Flatest%2F)|
