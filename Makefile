BUILD_DIR = generated # Variable for the output directory
LANGUAGES = en
SEPARATOR = "---------------------------------------------------------"

clean:
	rm -Rf $(BUILD_DIR)

setup:
	pip3 install --force-reinstall -r requirements.txt && \
	pip3 install --upgrade --force-reinstall mkdocs-material

serve:
	make clean
	@echo "Serving MkDocs site..."
	@trap 'echo "Stopping MkDocs server..."; pkill -f "mkdocs serve"' SIGINT SIGTERM; \
	mkdocs serve --dev-addr 127.0.0.1:8000 --config-file config/en/mkdocs.yml & \
	wait

build:
	@echo ""
	@echo "Preparing to build..."
	make clean
	mkdir -p $(BUILD_DIR)
	@echo ""
	@echo "$(SEPARATOR)"
	@echo "Building MkDocs sites..."
	$(foreach lang, $(LANGUAGES), \
	    echo ""; \
	    echo "$(SEPARATOR)"; \
		echo "Building $(lang)..."; \
		mkdocs build -f config/$(lang)/mkdocs.yml --clean; \
	)