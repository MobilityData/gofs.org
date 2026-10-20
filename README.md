# GOFS.org

Source code for [gofs.org](https://gofs.org/).

This site was built using [MkDocs](https://www.mkdocs.org/), a static site generator, and `mkdocs-materialx`, a technical documentation theme for MkDocs (a fork of [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)).

## Building or Serving the site locally

1. In Terminal, change the directory to one where you wish to build the site.
1. Ensure you have an up-to-date version of pip: 
   - Linux: `pip install pip` or `pip install --upgrade pip`
   - macOS: `pip3 install pip` or `pip3 install --upgrade pip`
1. Clone this repository:
   - `git clone https://github.com/MobilityData/gofs.org`
1. Change the directory to the cloned repository, and create & enable a Python virtual environment:
   - `python3 -m venv venv`
   - `source venv/bin/activate`
1. Install dependencies, including the `mkdocs-materialx` theme (command defined in `Makefile`):
   - `make setup`
1. To run the site locally (command defined in `Makefile`):
   - `make serve`
   - Then you can access the site via `http://127.0.0.1:8000/`
1. To build the site locally only (command defined in `Makefile`):
   - `make build`
1. Deactivate the Python virtual environment when done:
   - `deactivate`

## License

Except as otherwise noted, the content of this site is licensed under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
