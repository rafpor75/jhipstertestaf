package com.saf.service;

import com.saf.service.dto.PianiDiStudioDTO;
import java.util.List;

/**
 * Service Interface for managing PianiDiStudio.
 */
public interface PianiDiStudioService {

    /**
     * Save a pianiDiStudio.
     *
     * @param pianiDiStudioDTO the entity to save
     * @return the persisted entity
     */
    PianiDiStudioDTO save(PianiDiStudioDTO pianiDiStudioDTO);

    /**
     * Get all the pianiDiStudios.
     *
     * @return the list of entities
     */
    List<PianiDiStudioDTO> findAll();

    /**
     * Get the "id" pianiDiStudio.
     *
     * @param id the id of the entity
     * @return the entity
     */
    PianiDiStudioDTO findOne(Long id);

    /**
     * Delete the "id" pianiDiStudio.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
